
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaVirusScanProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaVirusScanProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaVirusScanProfile[];

    constructor(data? : KalturaVirusScanProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaVirusScanProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaVirusScanProfile, subType : 'KalturaVirusScanProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirusScanProfileListResponse',KalturaVirusScanProfileListResponse);
