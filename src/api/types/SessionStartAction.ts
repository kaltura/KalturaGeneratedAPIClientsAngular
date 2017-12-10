
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionStartActionArgs  extends KalturaRequestArgs {
    secret : string;
	userId? : string;
	type? : KalturaSessionType;
	partnerId? : number;
	expiry? : number;
	privileges? : string;
}

/**
 * Build request payload for service 'session' action 'start'.
 *
 * Usage: Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SessionStartAction extends KalturaRequest<string> {

    secret : string;
	userId : string;
	type : KalturaSessionType;
	partnerId : number;
	expiry : number;
	privileges : string;

    constructor(data : SessionStartActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.expiry === 'undefined') this.expiry = 86400;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'start' },
				secret : { type : 's' },
				userId : { type : 's' },
				type : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				partnerId : { type : 'n' },
				expiry : { type : 'n' },
				privileges : { type : 's' }
            }
        );
        return result;
    }
}

