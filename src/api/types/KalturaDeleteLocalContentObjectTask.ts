
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaDeleteLocalContentObjectTaskArgs  extends KalturaObjectTaskArgs {
    
}


export class KalturaDeleteLocalContentObjectTask extends KalturaObjectTask {

    

    constructor(data? : KalturaDeleteLocalContentObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeleteLocalContentObjectTask' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeleteLocalContentObjectTask',KalturaDeleteLocalContentObjectTask);
