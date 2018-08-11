
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface DataServeActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
	version? : number;
	forceProxy? : boolean;
}

/**
 * Build request payload for service 'data' action 'serve'.
 *
 * Usage: serve action returan the file from dataContent field
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class DataServeAction extends KalturaFileRequest {

    entryId : string;
	version : number;
	forceProxy : boolean;

    constructor(data : DataServeActionArgs)
    {
        super(data);
        if (typeof this.version === 'undefined') this.version = -1;
		if (typeof this.forceProxy === 'undefined') this.forceProxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'serve' },
				entryId : { type : 's' },
				version : { type : 'n' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}

