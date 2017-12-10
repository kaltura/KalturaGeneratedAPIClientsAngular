
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPlaylistListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaPlaylistListResponse extends KalturaListResponse {

    readonly objects : KalturaPlaylist[];

    constructor(data? : KalturaPlaylistListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPlaylistListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaPlaylist, subType : 'KalturaPlaylist' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaylistListResponse',KalturaPlaylistListResponse);
