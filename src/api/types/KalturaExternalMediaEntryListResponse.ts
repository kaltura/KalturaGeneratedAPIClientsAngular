
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaExternalMediaEntryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaExternalMediaEntryListResponse extends KalturaListResponse {

    readonly objects : KalturaExternalMediaEntry[];

    constructor(data? : KalturaExternalMediaEntryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaExternalMediaEntryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaExternalMediaEntry, subType : 'KalturaExternalMediaEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalMediaEntryListResponse',KalturaExternalMediaEntryListResponse);
