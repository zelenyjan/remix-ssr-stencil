import { createReactComponent } from './components/stencil-generated/react-component-lib';
import { applyPolyfills, defineCustomElements } from '@zelenyjan/stencil-green-core/loader';
applyPolyfills().then(() => defineCustomElements());
export const GreenButton = createReactComponent('green-button');
export const GreenInput = createReactComponent('green-input');
//# sourceMappingURL=index.js.map