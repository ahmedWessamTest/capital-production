import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const noCacheInterceptor: HttpInterceptorFn = (req:HttpRequest<any>, next:HttpHandlerFn) => {
  if(req.method === 'GET') {
    const noCacheReq = req.clone({
        setParams: {
          'v':Date.now().toString()
        }
      })
      return next(noCacheReq);
  }
  return next(req);
  
};
