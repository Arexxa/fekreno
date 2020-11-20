import { Model } from '@vuex-orm/core'
import User from './User'
import Project from './Project'
import DevEnvironment from './DevEnvironment'

export default class Repository extends Model {

  static entity = 'repository'

  static primaryKey = 'id'

  static fields () {
    return {
      id: this.attr(''),
      giturl: this.attr(null),
      framework: this.attr(''),
      description: this.attr(''),
      createdAt: this.attr(''),
      updatedAt: this.attr(''),
      deletedAt: this.attr(''),
      userId: this.attr(''),
      projectId: this.attr(''),
      devEnvironmentId: this.attr(''),
      
      // relation
      user: this.belongsTo(User, 'userId'),
      project: this.belongsTo(Project, 'projectId'),
      devenvironment: this.belongsTo(DevEnvironment, 'devEnvironmentId')
    }
  }

  get timeAgo() {
    let seconds = Math.floor((new Date() - new Date(this.updatedAt)) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
}