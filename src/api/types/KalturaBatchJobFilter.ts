
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobBaseFilter, KalturaBatchJobBaseFilterArgs } from './KalturaBatchJobBaseFilter';

export interface KalturaBatchJobFilterArgs  extends KalturaBatchJobBaseFilterArgs {
    
}


export class KalturaBatchJobFilter extends KalturaBatchJobBaseFilter {

    

    constructor(data? : KalturaBatchJobFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchJobFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBatchJobFilter',KalturaBatchJobFilter);
