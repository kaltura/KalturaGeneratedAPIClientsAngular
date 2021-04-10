
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskGetServeUrlActionArgs  extends KalturaRequestArgs {
    filterType? : string;
	filterInput? : number;
	status? : number;
	dueDate? : string;
}

/**
 * Build request payload for service 'entryVendorTask' action 'getServeUrl'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskGetServeUrlAction extends KalturaRequest<string> {

    filterType : string;
	filterInput : number;
	status : number;
	dueDate : string;

    constructor(data? : EntryVendorTaskGetServeUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'getServeUrl' },
				filterType : { type : 's' },
				filterInput : { type : 'n' },
				status : { type : 'n' },
				dueDate : { type : 's' }
            }
        );
        return result;
    }
}

