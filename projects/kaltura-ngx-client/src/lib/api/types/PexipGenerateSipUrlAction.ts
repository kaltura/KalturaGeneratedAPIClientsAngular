
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSipSourceType } from './KalturaSipSourceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PexipGenerateSipUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	regenerate? : boolean;
	sourceType? : KalturaSipSourceType;
}

/**
 * Build request payload for service 'pexip' action 'generateSipUrl'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class PexipGenerateSipUrlAction extends KalturaRequest<string> {

    entryId : string;
	regenerate : boolean;
	sourceType : KalturaSipSourceType;

    constructor(data : PexipGenerateSipUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.regenerate === 'undefined') this.regenerate = false;
		if (typeof this.sourceType === 'undefined') this.sourceType = 1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sip_pexip' },
				action : { type : 'c', default : 'generateSipUrl' },
				entryId : { type : 's' },
				regenerate : { type : 'b' },
				sourceType : { type : 'en', subTypeConstructor : KalturaSipSourceType, subType : 'KalturaSipSourceType' }
            }
        );
        return result;
    }
}

