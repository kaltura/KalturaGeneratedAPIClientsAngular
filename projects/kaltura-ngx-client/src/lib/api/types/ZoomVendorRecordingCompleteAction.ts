
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorRecordingCompleteActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'zoomVendor' action 'recordingComplete'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorRecordingCompleteAction extends KalturaRequest<void> {

    

    constructor(data? : ZoomVendorRecordingCompleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'recordingComplete' }
            }
        );
        return result;
    }
}

