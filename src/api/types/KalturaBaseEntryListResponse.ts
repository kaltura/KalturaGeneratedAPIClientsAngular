
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBaseEntryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaBaseEntryListResponse extends KalturaListResponse {

    readonly objects : KalturaBaseEntry[];

    constructor(data? : KalturaBaseEntryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBaseEntryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaBaseEntry, subType : 'KalturaBaseEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryListResponse',KalturaBaseEntryListResponse);
