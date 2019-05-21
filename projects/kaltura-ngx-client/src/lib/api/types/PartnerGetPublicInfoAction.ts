
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerPublicInfo } from './KalturaPartnerPublicInfo';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetPublicInfoActionArgs  extends KalturaRequestArgs {
    id? : number;
}

/**
 * Build request payload for service 'partner' action 'getPublicInfo'.
 *
 * Usage: Returns partner public info by Id
 *
 * Server response type:         KalturaPartnerPublicInfo
 * Server failure response type: KalturaAPIException
 */
export class PartnerGetPublicInfoAction extends KalturaRequest<KalturaPartnerPublicInfo> {

    id : number;

    constructor(data? : PartnerGetPublicInfoActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerPublicInfo', responseConstructor : KalturaPartnerPublicInfo  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'getPublicInfo' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

