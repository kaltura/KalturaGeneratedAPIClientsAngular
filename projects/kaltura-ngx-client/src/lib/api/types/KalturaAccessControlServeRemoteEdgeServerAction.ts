
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlServeRemoteEdgeServerActionArgs  extends KalturaRuleActionArgs {
    edgeServerIds? : string;
	seamlessFallbackEnabled? : KalturaNullableBoolean;
}


export class KalturaAccessControlServeRemoteEdgeServerAction extends KalturaRuleAction {

    edgeServerIds : string;
	seamlessFallbackEnabled : KalturaNullableBoolean;

    constructor(data? : KalturaAccessControlServeRemoteEdgeServerActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlServeRemoteEdgeServerAction' },
				edgeServerIds : { type : 's' },
				seamlessFallbackEnabled : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlServeRemoteEdgeServerAction'] = KalturaAccessControlServeRemoteEdgeServerAction;