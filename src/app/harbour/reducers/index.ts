import * as fromRoot from '../../reducers';
import { Slice } from './harbour.reducer';

export interface State extends fromRoot.State {
    harbour: Slice;
}
