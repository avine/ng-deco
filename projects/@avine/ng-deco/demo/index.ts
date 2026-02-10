export * from './demo-lorem/demo-lorem';
export * from './demo-lorem/demo-lorem-utils';

export * from './demo-state/demo-state-form';
export * from './demo-state/demo-state-prop';
export * from './demo-state/demo-state-types';

export * from './demo-title/demo-title';

export * from './demo-constants';
export * from './demo-service';

import { DcDemoLorem } from './demo-lorem/demo-lorem';
import { DcDemoStateForm } from './demo-state/demo-state-form';
import { DcDemoTitle } from './demo-title/demo-title';

export const DcDemoModule = [DcDemoLorem, DcDemoStateForm, DcDemoTitle];
