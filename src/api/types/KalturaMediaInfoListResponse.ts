
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaInfo } from './KalturaMediaInfo';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMediaInfoListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMediaInfoListResponse extends KalturaListResponse {

    readonly objects : KalturaMediaInfo[];

    constructor(data? : KalturaMediaInfoListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMediaInfoListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMediaInfo, subType : 'KalturaMediaInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaInfoListResponse',KalturaMediaInfoListResponse);
