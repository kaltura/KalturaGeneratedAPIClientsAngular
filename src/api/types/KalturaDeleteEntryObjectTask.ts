
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaDeleteEntryObjectTaskArgs  extends KalturaObjectTaskArgs {
    
}


export class KalturaDeleteEntryObjectTask extends KalturaObjectTask {

    

    constructor(data? : KalturaDeleteEntryObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeleteEntryObjectTask' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeleteEntryObjectTask',KalturaDeleteEntryObjectTask);
