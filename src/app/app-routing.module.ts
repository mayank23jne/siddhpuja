import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
 
  
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'book-now/:puja_id/:puja_name/:puja_price',
    loadChildren: () => import('./book-now/book-now.module').then( m => m.BookNowPageModule)
  },
  {
    path: 'paramarsh/:name/:id',
    loadChildren: () => import('./paramarsh/paramarsh.module').then( m => m.ParamarshPageModule)
  },
  {
    path: 'panchang',
    loadChildren: () => import('./panchang/panchang.module').then( m => m.PanchangPageModule)
  },
  // {
  //   path: 'rashifal',
  //   loadChildren: () => import('./rashifal/rashifal.module').then( m => m.RashifalPageModule)
  // },
  {
    path: 'own-kundali',
    loadChildren: () => import('./own-kundali/own-kundali.module').then( m => m.OwnKundaliPageModule)
  },
  {
    path: 'own-kundali-response/:data',
    loadChildren: () => import('./own-kundali-response/own-kundali-response.module').then( m => m.OwnKundaliResponsePageModule)
  },
 
  {
    path: 'rasifal-response/:data',
    loadChildren: () => import('./rasifal-response/rasifal-response.module').then( m => m.RasifalResponsePageModule)
  },
  {
    path: 'live-darshan',
    loadChildren: () => import('./live-darshan/live-darshan.module').then( m => m.LiveDarshanPageModule)
  },
  {
    path: 'live-darshan-video/:id',
    loadChildren: () => import('./live-darshan-video/live-darshan-video.module').then( m => m.LiveDarshanVideoPageModule)
  },
  
  {
    path: 'festival-detail/:id',
    loadChildren: () => import('./festival-detail/festival-detail.module').then( m => m.FestivalDetailPageModule)
  },
  {
    path: 'hindi-calendar',
    loadChildren: () => import('./hindi-calendar/hindi-calendar.module').then( m => m.HindiCalendarPageModule)
  },
  
  {
    path: 'calendar-panchang/:data',
    loadChildren: () => import('./calendar-panchang/calendar-panchang.module').then( m => m.CalendarPanchangPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'notification-detail/:id',
    loadChildren: () => import('./notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
 
  
  {
    path: 'sujhav',
    loadChildren: () => import('./sujhav/sujhav.module').then( m => m.SujhavPageModule)
  },
 
  
  {
    path: 'yearly-rashifal-response/:data',
    loadChildren: () => import('./yearly-rashifal-response/yearly-rashifal-response.module').then( m => m.YearlyRashifalResponsePageModule)
  },
  {
    path: 'monthly-rashifal-response/:data',
    loadChildren: () => import('./monthly-rashifal-response/monthly-rashifal-response.module').then( m => m.MonthlyRashifalResponsePageModule)
  },
 
  {
    path: 'pratahm-prashn-response/:name/:id',
    loadChildren: () => import('./pratahm-prashn-response/pratahm-prashn-response.module').then( m => m.PratahmPrashnResponsePageModule)
  },
  
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  
  {
    path: 'rashi',
    loadChildren: () => import('./rashi/rashi.module').then( m => m.RashiPageModule)
  },
  {
    path: 'vrat',
    loadChildren: () => import('./vrat/vrat.module').then( m => m.VratPageModule)
  },
  {
    path: 'home-new',
    loadChildren: () => import('./home-new/home-new.module').then( m => m.HomeNewPageModule)
  },
  {
    path: 'main-menu-new/:id',
    loadChildren: () => import('./main-menu-new/main-menu-new.module').then( m => m.MainMenuNewPageModule)
  },
  {
    path: 'post-new/:id',
    loadChildren: () => import('./post-new/post-new.module').then( m => m.PostNewPageModule)
  },
  
  {
    path: 'web-kundali/:id',
    loadChildren: () => import('./web-kundali/web-kundali.module').then( m => m.WebKundaliPageModule)
  },
  {
    path: 'web-kundali-match/:id',
    loadChildren: () => import('./web-kundali-match/web-kundali-match.module').then( m => m.WebKundaliMatchPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'kundali-pdf',
    loadChildren: () => import('./kundali-pdf/kundali-pdf.module').then( m => m.KundaliPdfPageModule)
  },
  {
    path: 'web-kundali-pdf/:id',
    loadChildren: () => import('./web-kundali-pdf/web-kundali-pdf.module').then( m => m.WebKundaliPdfPageModule)
  },
  {
    path: 'web-kundali-match-pdf/:id',
    loadChildren: () => import('./web-kundali-match-pdf/web-kundali-match-pdf.module').then( m => m.WebKundaliMatchPdfPageModule)
  },
  {
    path: 'kundali-payment',
    loadChildren: () => import('./kundali-payment/kundali-payment.module').then( m => m.KundaliPaymentPageModule)
  },
  {
    path: 'kundali-match-payment',
    loadChildren: () => import('./kundali-match-payment/kundali-match-payment.module').then( m => m.KundaliMatchPaymentPageModule)
  },
  {
    path: 'kundali-match-pdf',
    loadChildren: () => import('./kundali-match-pdf/kundali-match-pdf.module').then( m => m.KundaliMatchPdfPageModule)
  },
  
  {
    path: 'dharmik-news',
    loadChildren: () => import('./dharmik-news/dharmik-news.module').then( m => m.DharmikNewsPageModule)
  },
  {
    path: 'sub-menu-page/:id',
    loadChildren: () => import('./sub-menu-page/sub-menu-page.module').then( m => m.SubMenuPagePageModule)
  },
  {
    path: 'kundali-print',
    loadChildren: () => import('./kundali-print/kundali-print.module').then( m => m.KundaliPrintPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'new-calender',
    loadChildren: () => import('./new-calender/new-calender.module').then( m => m.NewCalenderPageModule)
  },
  {
    path: 'match-making',
    loadChildren: () => import('./match-making/match-making.module').then( m => m.MatchMakingPageModule)
  },
  {
    path: 'kundali-match/:id',
    loadChildren: () => import('./kundali-match/kundali-match.module').then( m => m.KundaliMatchPageModule)
  },
  {
    path: 'update-app',
    loadChildren: () => import('./update-app/update-app.module').then( m => m.UpdateAppPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
