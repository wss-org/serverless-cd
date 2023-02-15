const _ = require('lodash');
const { TABLE } = require('@serverless-cd/config');
const { prisma } = require('../util');

const applicationPrisma = prisma[TABLE.APPLICATION];

const getAppInfo = (result) => {
  if (!result) {
    return null;
  }
  if (_.isArray(result)) {
    result = _.first(result);
  }
  result.environment = _.isString(result.environment)
    ? JSON.parse(result.environment)
    : result.environment;
  return result;
};

module.exports = {
  async getAppById(id) {
    const result = await applicationPrisma.findUnique({ where: { id } });
    return getAppInfo(result);
  },
  async getAppByProvider({ orgId, provider, providerRepoId }) {
    const application = await applicationPrisma.findFirst({
      where: {
        org_id: orgId,
        provider,
        provider_repo_id: providerRepoId,
      },
    });
    return getAppInfo(application);
  },
  async createApp(data) {
    return await applicationPrisma.create({
      data: {
        ...data,
        environment: JSON.stringify(data.environment),
      },
    });
  },
  async listAppByOrgId(orgId) {
    const applicationResult = await applicationPrisma.findMany({
      where: {
        org_id: orgId,
      },
      orderBy: {
        updated_time: 'desc',
      },
    });
    return _.map(applicationResult, (item) => getAppInfo(item));
  },
  async deleteAppById(appId) {
    const result = await applicationPrisma.delete({
      where: { id: appId },
    });
    return result;
  },
  async deleteAppByOrgId(orgId = '') {
    const result = await applicationPrisma.deleteMany({ where: { org_id: orgId } });
    return result;
  },
  async updateAppById(id, data) {
    if (_.isPlainObject(data.environment)) {
      data.environment = JSON.stringify(data.environment);
    }
    const result = applicationPrisma.update({ where: { id }, data });
    return result;
  },
};
