
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConversionProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaConversionProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaConversionProfile[];

    constructor(data? : KalturaConversionProfileListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaConversionProfile, subType : 'KalturaConversionProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfileListResponse',KalturaConversionProfileListResponse);
