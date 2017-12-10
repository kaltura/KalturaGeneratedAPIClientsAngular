
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaThumbParamsListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaThumbParamsListResponse extends KalturaListResponse {

    readonly objects : KalturaThumbParams[];

    constructor(data? : KalturaThumbParamsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaThumbParamsListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParamsListResponse',KalturaThumbParamsListResponse);
