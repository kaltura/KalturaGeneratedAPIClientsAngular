
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaControlPanelCommandFilter',KalturaControlPanelCommandFilter);
