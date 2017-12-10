
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledTaskProfileBaseFilter, KalturaScheduledTaskProfileBaseFilterArgs } from './KalturaScheduledTaskProfileBaseFilter';

export interface KalturaScheduledTaskProfileFilterArgs  extends KalturaScheduledTaskProfileBaseFilterArgs {
    
}


export class KalturaScheduledTaskProfileFilter extends KalturaScheduledTaskProfileBaseFilter {

    

    constructor(data? : KalturaScheduledTaskProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledTaskProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledTaskProfileFilter',KalturaScheduledTaskProfileFilter);
