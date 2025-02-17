const router = require('express').Router();
const _ = require('lodash');
const fs = require('fs');
const debug = require('debug')('serverless-cd:task');

const { Result, Client, ValidationError, NotFoundError } = require('../../util');
const auth = require('../../middleware/auth/role');
const { MEMBER_ROLE_KEYS, LOG_LOCAL_PATH_PREFIX } = require('@serverless-cd/config');
const taskService = require('../../services/task.service');

/**
 * task 列表
 * query: { appId, envName?, taskId?, pageSize, currentPage }
 */
router.get('/list', async function (req, res) {
  const { totalCount, result } = await taskService.list(req.query);
  return res.json(
    Result.ofSuccess({
      result: _.map(result, taskService.getTaskConfig),
      totalCount,
    }),
  );
});

/**
 * task 详情
 */
router.get('/detail', async function (req, res) {
  const result = await taskService.detail(req.query.id);
  return res.json(Result.ofSuccess(taskService.getTaskConfig(result)));
});

/**
 * task 日志
 */
router.get('/log', async function (req, res) {
  const taskId = _.get(req.query, 'id');
  const stepCount = _.get(req.query, 'stepCount');
  if (_.isEmpty(taskId)) {
    throw new ValidationError('Taski id is empty');
  }
  if (_.isEmpty(stepCount)) {
    throw new ValidationError('StepCount is empty');
  }

  const logPath = `${LOG_LOCAL_PATH_PREFIX}/${taskId}/step_${stepCount}.log`;
  debug(`logPath: ${logPath}`);
  const ossClient = Client.oss();
  if (ossClient) {
    try {
      const { content } = await ossClient.get(logPath);
      res.json(Result.ofSuccess(content.toString('utf8')));
    } catch (ex) {
      if (ex.status === 404) {
        throw new NotFoundError('此运行的日志已过期，不再可用。');
      }
      console.error(ex.status, ex.code, ex.message);
      throw ex;
    }
  } else {
    try {
      const log = fs.readFileSync(logPath, { encoding: 'utf8' });
      res.json(Result.ofSuccess(log));
    } catch (ex) {
      throw new NotFoundError('没有找到日志');
    }
  }
});

/**
 * 删除 task
 */
router.post('/remove', auth(MEMBER_ROLE_KEYS), async function (req, res) {
  const taskId = _.get(req.body, 'id');
  await taskService.remove(taskId);
  res.json(Result.ofSuccess());
});

module.exports = router;
