
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserEntryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUserEntryListResponse extends KalturaListResponse {

    readonly objects : KalturaUserEntry[];

    constructor(data? : KalturaUserEntryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserEntryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUserEntry, subType : 'KalturaUserEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserEntryListResponse',KalturaUserEntryListResponse);
