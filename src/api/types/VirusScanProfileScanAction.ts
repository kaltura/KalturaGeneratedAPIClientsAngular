
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileScanActionArgs  extends KalturaRequestArgs {
    flavorAssetId : string;
	virusScanProfileId? : number;
}

/**
 * Build request payload for service 'virusScanProfile' action 'scan'.
 *
 * Usage: Scan flavor asset according to virus scan profile
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VirusScanProfileScanAction extends KalturaRequest<number> {

    flavorAssetId : string;
	virusScanProfileId : number;

    constructor(data : VirusScanProfileScanActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'virusscan_virusscanprofile' },
				action : { type : 'c', default : 'scan' },
				flavorAssetId : { type : 's' },
				virusScanProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

