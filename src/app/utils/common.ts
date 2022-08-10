import { Inject } from '@angular/core'
import { Router } from '@angular/router'

export const reload = (router: Router): void => {
  const currentUrl = router.url
  router.navigateByUrl('/', { skipLocationChange: true }).then(() => router.navigate([currentUrl]))
}
