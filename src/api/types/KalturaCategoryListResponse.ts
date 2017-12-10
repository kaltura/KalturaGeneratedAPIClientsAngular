
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategory } from './KalturaCategory';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCategoryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCategoryListResponse extends KalturaListResponse {

    readonly objects : KalturaCategory[];

    constructor(data? : KalturaCategoryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCategoryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCategory, subType : 'KalturaCategory' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryListResponse',KalturaCategoryListResponse);
