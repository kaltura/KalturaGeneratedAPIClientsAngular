
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTrackEntry } from './KalturaTrackEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTrackEntryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaTrackEntryListResponse extends KalturaListResponse {

    readonly objects : KalturaTrackEntry[];

    constructor(data? : KalturaTrackEntryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaTrackEntryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaTrackEntry, subType : 'KalturaTrackEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTrackEntryListResponse',KalturaTrackEntryListResponse);
