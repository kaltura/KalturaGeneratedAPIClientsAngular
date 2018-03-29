
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaBeacon } from './KalturaBeacon';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BeaconAddActionArgs  extends KalturaRequestArgs {
    beacon : KalturaBeacon;
	shouldLog? : KalturaNullableBoolean;
}

/**
 * Build request payload for service 'beacon' action 'add'.
 *
 * 
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BeaconAddAction extends KalturaRequest<boolean> {

    beacon : KalturaBeacon;
	shouldLog : KalturaNullableBoolean;

    constructor(data : BeaconAddActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'beacon_beacon' },
				action : { type : 'c', default : 'add' },
				beacon : { type : 'o', subTypeConstructor : KalturaBeacon, subType : 'KalturaBeacon' },
				shouldLog : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

