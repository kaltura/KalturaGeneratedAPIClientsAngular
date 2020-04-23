
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PexipListRoomsActionArgs  extends KalturaRequestArgs {
    offset? : number;
	pageSize? : number;
	activeOnly? : boolean;
}

/**
 * Build request payload for service 'pexip' action 'listRooms'.
 *
 * 
 *
 * Server response type:         KalturaStringValue[]
 * Server failure response type: KalturaAPIException
 */
export class PexipListRoomsAction extends KalturaRequest<KalturaStringValue[]> {

    offset : number;
	pageSize : number;
	activeOnly : boolean;

    constructor(data? : PexipListRoomsActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaStringValue', responseConstructor : KalturaStringValue  });
        if (typeof this.pageSize === 'undefined') this.pageSize = 500;
		if (typeof this.activeOnly === 'undefined') this.activeOnly = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sip_pexip' },
				action : { type : 'c', default : 'listRooms' },
				offset : { type : 'n' },
				pageSize : { type : 'n' },
				activeOnly : { type : 'b' }
            }
        );
        return result;
    }
}

