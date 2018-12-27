'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router,controller } = app;
    router.get('/', controller.home.index);

    //管理员
    router.get('/admin/manager',controller.admin.manager.index);
    router.get('/admin/manager/add',controller.admin.manager.add);
    router.get('/admin/manager/edit',controller.admin.manager.edit);
    router.get('/admin/manager/delete',controller.admin.manager.delete);

    //角色
    router.get('/admin/role',controller.admin.role.index);
    router.get('/admin/role/add',controller.admin.role.add);
    router.get('/admin/role/edit',controller.admin.role.edit);
    router.get('/admin/role/delete',controller.admin.role.delete);

    //权限
    router.get('/admin/access',controller.admin.access.index);
    router.get('/admin/access/add',controller.admin.access.add);
    router.get('/admin/access/edit',controller.admin.access.edit);
    router.get('/admin/access/delete',controller.admin.access.delete);

    //登录
    router.get('/admin/login',controller.admin.login.index)



}



