
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlPreviewActionArgs  extends KalturaRuleActionArgs {
    limit? : number;
}


export class KalturaAccessControlPreviewAction extends KalturaRuleAction {

    limit : number;

    constructor(data? : KalturaAccessControlPreviewActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlPreviewAction' },
				limit : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlPreviewAction'] = KalturaAccessControlPreviewAction;