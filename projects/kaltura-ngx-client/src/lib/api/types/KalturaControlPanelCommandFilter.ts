
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaControlPanelCommandBaseFilter, KalturaControlPanelCommandBaseFilterArgs } from './KalturaControlPanelCommandBaseFilter';

export interface KalturaControlPanelCommandFilterArgs  extends KalturaControlPanelCommandBaseFilterArgs {
    
}


export class KalturaControlPanelCommandFilter extends KalturaControlPanelCommandBaseFilter {

    

    constructor(data? : KalturaControlPanelCommandFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaControlPanelCommandFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaControlPanelCommandFilter'] = KalturaControlPanelCommandFilter;