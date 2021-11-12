import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary, FaIconComponent, FaStackComponent } from '@fortawesome/angular-fontawesome';
import {
  faShoppingCart, faSpinner, faAngleLeft, faAngleRight, faPlus, faMinus, faStar as fasStar, faStarHalfAlt, faArrowRight, faUpload, faVideo,
  faEdit, faPen, faTrashAlt, faSearch, faUser, faKey, faEye, faEyeSlash, faSignInAlt, faSignOutAlt, faUserPlus,
  faCircle, faCircleNotch, faMap, faMapMarked, faMapMarkerAlt, faWheelchair, faPaw, faChild, faCheck, faBars, faWindowClose,
  faEnvelope, faBook, faSuitcase, faLongArrowAltRight, faMoneyBill, faCaretLeft, faCaretRight, faDownload, faTimes,
  faTrash, faFile, faInfoCircle, faEllipsisV, faSuitcaseRolling, faBan, faExternalLinkAlt, faChartBar, faChevronDown, faCog,
  faPhone, faPlay, faCalendar, faCalendarAlt, faAngleDown, faPlusSquare, faMinusSquare, faUserCircle, faPenSquare, faHome, faBlog, faReceipt, faWarehouse, faPallet, faUsers, faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faYoutube, faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'
import { faStar as farStar, faCircle as farCircle, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  entryComponents: [
    FaIconComponent,
    FaStackComponent,
  ], exports: [
    FaIconComponent,
    FaStackComponent
  ]
})
export class FaIconModule {
  constructor(
    private library: FaIconLibrary
  ) {
    this.library.addIcons(
      faSpinner, faFacebookF, faCalendarAlt, faUpload, faPlus, faMinus, faPlusSquare, faMinusSquare, faYoutubeSquare, faYoutube, faSearch,
      faPlay, faShoppingCart, faCog, faPhone, faSignInAlt, faSignOutAlt, faBars, faWindowClose, faEye, faHome, faBlog, faReceipt, faWarehouse,
      faPallet, faUsers, faEyeSlash, faCircle, faAngleLeft, faAngleRight, faAngleDown, faTrash, faTrashAlt, faTimes, faUserCircle, faEdit, faWindowMaximize,
      faPencilAlt
      )
  }
}
