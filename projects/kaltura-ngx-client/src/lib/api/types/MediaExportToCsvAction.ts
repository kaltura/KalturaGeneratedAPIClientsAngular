
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaMediaEsearchExportToCsvJobData } from './KalturaMediaEsearchExportToCsvJobData';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaExportToCsvActionArgs  extends KalturaRequestArgs {
    data : KalturaMediaEsearchExportToCsvJobData;
}

/**
 * Build request payload for service 'media' action 'exportToCsv'.
 *
 * Usage: Creates a batch job that sends an email with a link to download a CSV containing a list of entries
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class MediaExportToCsvAction extends KalturaRequest<string> {

    data : KalturaMediaEsearchExportToCsvJobData;

    constructor(data : MediaExportToCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'exportToCsv' },
				data : { type : 'o', subTypeConstructor : KalturaMediaEsearchExportToCsvJobData, subType : 'KalturaMediaEsearchExportToCsvJobData' }
            }
        );
        return result;
    }
}

