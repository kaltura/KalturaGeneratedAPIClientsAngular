
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaInfoBaseFilter, KalturaMediaInfoBaseFilterArgs } from './KalturaMediaInfoBaseFilter';

export interface KalturaMediaInfoFilterArgs  extends KalturaMediaInfoBaseFilterArgs {
    
}


export class KalturaMediaInfoFilter extends KalturaMediaInfoBaseFilter {

    

    constructor(data? : KalturaMediaInfoFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaInfoFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaInfoFilter',KalturaMediaInfoFilter);
