
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobFilter, KalturaBatchJobFilterArgs } from './KalturaBatchJobFilter';

export interface KalturaBatchJobFilterExtArgs  extends KalturaBatchJobFilterArgs {
    jobTypeAndSubTypeIn? : string;
}


export class KalturaBatchJobFilterExt extends KalturaBatchJobFilter {

    jobTypeAndSubTypeIn : string;

    constructor(data? : KalturaBatchJobFilterExtArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchJobFilterExt' },
				jobTypeAndSubTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBatchJobFilterExt'] = KalturaBatchJobFilterExt;