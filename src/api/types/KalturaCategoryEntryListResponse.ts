
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryEntry } from './KalturaCategoryEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCategoryEntryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCategoryEntryListResponse extends KalturaListResponse {

    readonly objects : KalturaCategoryEntry[];

    constructor(data? : KalturaCategoryEntryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCategoryEntryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCategoryEntry, subType : 'KalturaCategoryEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryEntryListResponse',KalturaCategoryEntryListResponse);
