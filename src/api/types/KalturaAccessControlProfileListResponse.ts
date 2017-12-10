
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAccessControlProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaAccessControlProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaAccessControlProfile[];

    constructor(data? : KalturaAccessControlProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAccessControlProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaAccessControlProfile, subType : 'KalturaAccessControlProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlProfileListResponse',KalturaAccessControlProfileListResponse);
