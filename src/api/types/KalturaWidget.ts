
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidgetSecurityType } from './KalturaWidgetSecurityType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaWidgetArgs  extends KalturaObjectBaseArgs {
    sourceWidgetId? : string;
	entryId? : string;
	uiConfId? : number;
	securityType? : KalturaWidgetSecurityType;
	securityPolicy? : number;
	partnerData? : string;
	enforceEntitlement? : boolean;
	privacyContext? : string;
	addEmbedHtml5Support? : boolean;
	roles? : string;
}


export class KalturaWidget extends KalturaObjectBase {

    readonly id : string;
	sourceWidgetId : string;
	readonly rootWidgetId : string;
	readonly partnerId : number;
	entryId : string;
	uiConfId : number;
	securityType : KalturaWidgetSecurityType;
	securityPolicy : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	partnerData : string;
	readonly widgetHTML : string;
	enforceEntitlement : boolean;
	privacyContext : string;
	addEmbedHtml5Support : boolean;
	roles : string;

    constructor(data? : KalturaWidgetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidget' },
				id : { type : 's', readOnly : true },
				sourceWidgetId : { type : 's' },
				rootWidgetId : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				entryId : { type : 's' },
				uiConfId : { type : 'n' },
				securityType : { type : 'en', subTypeConstructor : KalturaWidgetSecurityType, subType : 'KalturaWidgetSecurityType' },
				securityPolicy : { type : 'n' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerData : { type : 's' },
				widgetHTML : { type : 's', readOnly : true },
				enforceEntitlement : { type : 'b' },
				privacyContext : { type : 's' },
				addEmbedHtml5Support : { type : 'b' },
				roles : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidget',KalturaWidget);
