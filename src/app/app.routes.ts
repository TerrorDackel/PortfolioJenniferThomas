import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: '', component: ContentComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'content', component: ContentComponent},
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'footer', component: FooterComponent }
];
