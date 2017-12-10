
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMediaListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMediaListResponse extends KalturaListResponse {

    readonly objects : KalturaMediaEntry[];

    constructor(data? : KalturaMediaListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMediaListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaListResponse',KalturaMediaListResponse);
