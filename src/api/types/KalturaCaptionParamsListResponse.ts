
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCaptionParamsListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCaptionParamsListResponse extends KalturaListResponse {

    readonly objects : KalturaCaptionParams[];

    constructor(data? : KalturaCaptionParamsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCaptionParamsListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCaptionParams, subType : 'KalturaCaptionParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionParamsListResponse',KalturaCaptionParamsListResponse);
