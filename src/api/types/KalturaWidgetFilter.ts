
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidgetBaseFilter, KalturaWidgetBaseFilterArgs } from './KalturaWidgetBaseFilter';

export interface KalturaWidgetFilterArgs  extends KalturaWidgetBaseFilterArgs {
    
}


export class KalturaWidgetFilter extends KalturaWidgetBaseFilter {

    

    constructor(data? : KalturaWidgetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidgetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidgetFilter',KalturaWidgetFilter);
