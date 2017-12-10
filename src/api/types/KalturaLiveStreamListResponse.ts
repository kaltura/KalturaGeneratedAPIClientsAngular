
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLiveStreamListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaLiveStreamListResponse extends KalturaListResponse {

    readonly objects : KalturaLiveStreamEntry[];

    constructor(data? : KalturaLiveStreamListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaLiveStreamListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaLiveStreamEntry, subType : 'KalturaLiveStreamEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamListResponse',KalturaLiveStreamListResponse);
