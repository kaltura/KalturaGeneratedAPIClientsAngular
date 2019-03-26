
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExportcsvServeCsvActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'exportcsv' action 'serveCsv'.
 *
 * Usage: Will serve a requested CSV
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ExportcsvServeCsvAction extends KalturaRequest<string> {

    id : string;

    constructor(data : ExportcsvServeCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'exportcsv' },
				action : { type : 'c', default : 'serveCsv' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

