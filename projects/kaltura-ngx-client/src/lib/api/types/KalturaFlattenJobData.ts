
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaFlattenJobDataArgs  extends KalturaJobDataArgs {
    
}


export class KalturaFlattenJobData extends KalturaJobData {

    

    constructor(data? : KalturaFlattenJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlattenJobData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFlattenJobData'] = KalturaFlattenJobData;