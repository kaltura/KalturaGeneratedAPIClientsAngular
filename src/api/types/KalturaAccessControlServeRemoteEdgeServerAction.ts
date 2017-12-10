
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlServeRemoteEdgeServerActionArgs  extends KalturaRuleActionArgs {
    edgeServerIds? : string;
}


export class KalturaAccessControlServeRemoteEdgeServerAction extends KalturaRuleAction {

    edgeServerIds : string;

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
				edgeServerIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlServeRemoteEdgeServerAction',KalturaAccessControlServeRemoteEdgeServerAction);
