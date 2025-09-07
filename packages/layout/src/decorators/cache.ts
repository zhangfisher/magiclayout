import { cache as cacheRender } from 'lit/directives/cache.js';

/**
 * 装饰器函数，用于对类方法的返回值进行缓存
 * 使用lit/directives/cache.js中的cache指令实现
 * @param target 目标类的原型
 * @param propertyKey 方法名
 * @param descriptor 属性描述符
 * @returns 修改后的属性描述符
 */
export function cache(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    const result = originalMethod.apply(this, args);
    // 使用lit的cache指令包装返回值
    return cacheRender(result);
  };
  
  return descriptor;
}
