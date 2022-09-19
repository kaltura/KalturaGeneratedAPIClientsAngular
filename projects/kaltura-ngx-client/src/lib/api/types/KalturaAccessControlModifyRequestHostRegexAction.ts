
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlModifyRequestHostRegexActionArgs  extends KalturaRuleActionArgs {
    pattern? : string;
	replacement? : string;
	replacmenServerNodeId? : number;
	checkAliveTimeoutMs? : number;
}


export class KalturaAccessControlModifyRequestHostRegexAction extends KalturaRuleAction {

    pattern : string;
	replacement : string;
	replacmenServerNodeId : number;
	checkAliveTimeoutMs : number;

    constructor(data? : KalturaAccessControlModifyRequestHostRegexActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlModifyRequestHostRegexAction' },
				pattern : { type : 's' },
				replacement : { type : 's' },
				replacmenServerNodeId : { type : 'n' },
				checkAliveTimeoutMs : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlModifyRequestHostRegexAction'] = KalturaAccessControlModifyRequestHostRegexAction;